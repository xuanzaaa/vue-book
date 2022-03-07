// 防抖
export const debounce = (fn, time) => {
    let timer = null
    return function(...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, time)
    }
}

