<template>
  <div class="book-reader">
    <div id="reader"></div>
  </div>
</template>

<script>
import Epub from 'epubjs'
export default {
    name: 'bookReader',
    data() {
        return {
        }
    },
    created() {
        this.getBookUrl()
    },
    mounted() {
    },
    methods: {
        // 获取电子书地址
        getBookUrl() {
            const bookName = this.$route.params.bookName
            const url = `http://192.168.31.66:8081/test/${bookName}.epub`
            this.initEpub(url)
        },
        // 加载EPUB电子书
        initEpub(url) {
            this.book = new Epub(url)
            this.rendition = this.book.renderTo('reader', {
                width:window.innerWidth,
                height:window.innerHeight
            })
            this.rendition.display()
            // 绑定事件
            this.rendition.on('touchstart', this.bookTouchStart)
            this.rendition.on('touchmove', this.bookTouchMove)
            this.rendition.on('touchend', this.bookTouchEnd)
        },
        bookTouchStart(event) {
            console.log('stev', event)
            console.log('time', event.timeStamp)
            this.startX = event.changedTouches[0].clientX
            this.startTime = event.timeStamp
        },
        bookTouchMove() {
        },
        bookTouchEnd(event) {
            console.log('timeEnd', event.timeStamp)
            // 手指偏移距离
            const moveX = event.changedTouches[0].clientX -  this.startX
            // 滑动时间
            const time = event.timeStamp - this.startTime
            console.log('moveX->>>', moveX)
            console.log('time->>>', time)
            if (time < 500 && moveX > 40) {
                this.prevPage()
            } else if (time < 500 && moveX < -40) {
                this.nextPage()
            } else {
                // 显示标题栏
            }
            event.stopPropagation()
        },
        prevPage() {
            this.rendition && this.rendition.prev()
        },
        nextPage() {
            this.rendition && this.rendition.next()
        }
    }

}
</script>

<style lang="less" scoped>
    .book-reader {
        height: 100%;
        #reader {
            height: 100%;
        }
    }
</style>>