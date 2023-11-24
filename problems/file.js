let date = Intl.DateTimeFormat("ko-KR").format(new Date())
date = date.replace(/(\s*)/g, "")
date = date.slice(0, -1)
console.log(date)
