export default function checkPermissionUser(value) {
    if (value.length > 0) {
        const apiList =  this.$store.state.auth.user.apiSet
        const hasPermission = apiList.some(x => {
            return value.includes(x)
        })
        return hasPermission
    } else {
        return false
    }
}