export const hash = /#(.+?)(\?|\/|$)/
export const port = /\.\w{2,}:(\d{2,5})/
export const protocol = /(https|http|ftp)/
export const pathname = /^[^#]*?:\/\/.*?(\/[^#?]*)(?:\?|#|$)/
export const hostname = /(?:https|http|ftp):\/\/([\S]+\.[\w\d]+)/
