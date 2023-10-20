// Hàm này xuất ra 1 file có dạng header là 1 dòng tiu đề phụ trên đầu của bảng chính
import ExcelJS from "exceljs";
import {valueExcel} from "@/constant/listCommon";

export async function exportToExcel(exportToExcelData) {

    const titleFile = exportToExcelData.titleFile;
    const columnHeaders = exportToExcelData.columnHeaders;
    const companyInfo = exportToExcelData.companyInfo;
    const columnWidths = exportToExcelData.columnWidths;
    const dataList = exportToExcelData.dataList;
    const fileName = exportToExcelData.nameFile;
    const classInSchool = exportToExcelData.className;

    const workbook = new ExcelJS.Workbook();
    const worksheet = await workbook.addWorksheet(titleFile);

    await columnHeaders.forEach((header, index) => {
        const column = worksheet.getColumn(index + 1);
        column.alignment = {horizontal: 'center'};
        column.width = columnWidths[index]; // Đặt chiều rộng cho cột
    });

    await companyInfo.forEach(info => {
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

    const titleRow = await worksheet.addRow([titleFile]);
    titleRow.eachCell(cell => {
        cell.font = {
            color: {argb: 'FF0000FF'},
            bold: true,
            size: 12
        };
        cell.alignment = {horizontal: 'center', vertical: 'middle'};
    });
    await worksheet.addRow([]);
    await worksheet.addRow([]);
    let numberToAlphabet;
    const number = valueExcel.find((x) => x.value === columnHeaders.length);
    numberToAlphabet = number.key;
    // Merge các ô index
    for (let i = 1; i <= companyInfo.length + 2; i++) {
        worksheet.mergeCells(`A${i}:${numberToAlphabet}${i}`);
    }

    const onTopOfTheTable1 = "Đánh giá cân nặng theo tháng tuổi";
    const onTopOfTheTable2 = "Đánh giá chiều cao theo tháng tuổi";
    const onTopOfTheTable3 = "Đánh giá BMI theo tháng tuổi";
    const onTopOfTheTableRow = worksheet.getRow(6)
    onTopOfTheTableRow.font = {size: 12}

    // Merge các cột và fill màu cho cột
    worksheet.mergeCells('B6:I6');
    const classIndex = onTopOfTheTableRow.getCell('B');
    classIndex.value = classInSchool;
    classIndex.alignment = {horizontal: 'center', wrapText: true};
    classIndex.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {argb: 'FFFFFF00'},// Mã màu ARGB cho màu vàng
    };

    worksheet.mergeCells('J6:N6');
    const top1 = onTopOfTheTableRow.getCell('J');
    top1.value = onTopOfTheTable1;
    top1.alignment = {horizontal: 'center', wrapText: true};
    top1.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {argb: '66CC99'},
    };


    worksheet.mergeCells(`O6:S6`)
    const top2 = onTopOfTheTableRow.getCell('O');
    top2.value = onTopOfTheTable2;
    top2.alignment = {horizontal: 'center', wrapText: true};
    top2.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {argb: '00FFFF'},
    };


    worksheet.mergeCells(`T6:X6`)
    const top3 = onTopOfTheTableRow.getCell('T');
    top3.value = onTopOfTheTable3;
    top3.alignment = {horizontal: 'center', wrapText: true};
    top3.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {argb: 'CCFFCC'},
    };


    const headerRow = await worksheet.addRow(columnHeaders);

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
    await dataList.forEach((x) => worksheet.addRow(x));
    for (let i = 6; i <= dataList.length + 8; i++) {
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