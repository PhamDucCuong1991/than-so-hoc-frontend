import ExcelJS from "exceljs";
import {valueExcel} from "@/constant/listCommon";

export async function exportToExcel(exportToExcelData, otherObject) {

    const titleFile = exportToExcelData.titleFile;
    const columnHeaders = exportToExcelData.columnHeaders;
    const companyInfo = exportToExcelData.companyInfo;
    const columnWidths = exportToExcelData.columnWidths;
    const dataList = exportToExcelData.dataList;
    const fileName = exportToExcelData.nameFile;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(titleFile);

    columnHeaders.forEach((header, index) => {
        const column = worksheet.getColumn(index + 1);
        column.alignment = {horizontal: 'center'};
        column.width = columnWidths[index]; // Đặt chiều rộng cho cột
    });

    companyInfo.forEach(info => {
        const row = worksheet.addRow([info]);
        row.eachCell(cell => {
            cell.font = {
                color: {argb: 'FFFF0000'}, // mã ARGB cho màu đỏ
                bold: true,
                size: 12
            };
            cell.alignment = {
                horizontal: 'left',
                indent: 1 // thụt lề 10px
            };

        });
    });

    worksheet.addRow([]);
    const titleRow = worksheet.addRow([titleFile]);
    titleRow.eachCell(cell => {
        cell.font = {
            color: {argb: 'FF0000FF'},
            bold: true,
            size: 12
        };
        cell.alignment = {horizontal: 'center', vertical: 'middle'};
    });
    worksheet.addRow([]);

    let numberToAlphabet;
    const number = valueExcel.find((x) => x.value === columnHeaders.length);
    numberToAlphabet = number.key;
    // Merge các ô index
    for (let i = 1; i <= companyInfo.length + 3; i++) {
        worksheet.mergeCells(`A${i}:${numberToAlphabet}${i}`);
    }

    const headerRow = worksheet.addRow(columnHeaders);
    headerRow.eachCell((cell) => {
        cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: {argb: 'C0C0C0'} // mã màu ARGB
        };
        cell.alignment = {
            horizontal: 'center',
            vertical: 'middle',
            wrapText: true // Tự động ngắt dòng
        };
    });

    // Thêm dữ liệu vào bảng
    dataList.forEach((x) => worksheet.addRow(x));
    // Đặt border cho toàn bộ bảng
    for (let i = 7; i <= dataList.length + 7; i++) {
        const row = worksheet.getRow(i);
        row.eachCell({includeEmpty: true}, (cell) => {
            // Đặt border cho cell
            cell.border = {
                top: {style: 'thin'},
                left: {style: 'thin'},
                bottom: {style: 'thin'},
                right: {style: 'thin'},
            };
        });
    }
    // Dành cho những file nào có tổng cộng bên dưới (Thống kê học phí theo nhóm, lớp)
    if (fileName === 'ThongKeHocPhi') {
        const columBottom = await worksheet.addRow(otherObject);
        columBottom.eachCell((cell) => {
            // Đặt border cho cell
            cell.border = {
                left: {style: 'thin'},
                bottom: {style: 'thin'},
                right: {style: 'thin'},
            };
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'FFFF33'} // mã màu ARGB
            };
        })
    }

    // Tạo một blob từ workbook
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer],
        {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});

    // Tạo và tải file Excel
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

