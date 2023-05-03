import FileSaver from 'file-saver'
import XLSX from 'xlsx'

const htmlToExcel = {
  getExcel(dom: any, title = '默认标题') {
    const excelTitle = title
    const wb = XLSX.utils.table_to_book(document.querySelector(dom))
    /* 获取二进制字符串作为输出 */
    const wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
    try {
      FileSaver.saveAs(
        new Blob([wbout], { type: 'application/octet-stream' }),
        excelTitle + '.xlsx'
      )
    } catch (e) {
      if (typeof console !== 'undefined') console.log(e, wbout)
    }
    return wbout
  }
}

export default htmlToExcel
