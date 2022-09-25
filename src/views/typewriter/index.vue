<template>
    <div class="content">
        <div class="nes-container is-dark with-title tps" v-show="Type">
            <span class="element"></span>
        </div>
        <!-- Dark and Rounded dialog -->
        <section v-show="!Type">
            <button type="button" class="nes-btn is-primary"
                onclick="document.getElementById('dialog-dark-rounded').showModal();">
                开始填写
            </button>
            <dialog class="nes-dialog is-dark is-rounded" id="dialog-dark-rounded">
                <form method="dialog">
                    <div class="nes-field ">
                        <label for="inline_field">请输入你的名字</label>
                        <input type="text" id="inline_field" class="nes-input is-success" placeholder="You name"
                            v-model='userinfo.name' autocomplete="off">
                    </div>
                    <menu class="dialog-menu">
                        <button class="nes-btn">取消</button>
                        <button class="nes-btn is-primary"
                            onclick="document.getElementById('dialog-dark-rounded-friend').showModal();">确定</button>
                    </menu>
                </form>
            </dialog>
        </section>

        <!-- Dark and Rounded dialog -->
        <section>
            <dialog class="nes-dialog is-dark is-rounded" id="dialog-dark-rounded-friend">
                <form method="dialog">
                    <label for="inline_field">请输入你最好朋友的名字</label>
                    <input type="text" id="inline_field" class="nes-input is-success" placeholder="You friend name"
                        v-model='userinfo.friend' autocomplete="off">
                    <menu class="dialog-menu">
                        <button class="nes-btn">取消</button>
                        <button class="nes-btn is-primary" @click="showType">确定</button>
                    </menu>
                </form>
            </dialog>
        </section>
        <audio src="@/assets/audio/七里香-周杰伦.flac" loop='true' autoplay="autoplay" ref="MusicPlay" hidden></audio>
    </div>
</template>
  
<script>
//像素框架样式
import "nes.css/css/nes.min.css";
//打字机js库
import Typed from 'typed.js';
export default {
    data() {
        return {
            userinfo: {
                name: '',
                friend: '',
            },
            Type: false
        }
    },
    created() {
    },
    methods: {
        //
        showType() {
            this.Type = true
            console.log('this.Type', this.Type)
            var typed = new Typed('.element', {
                strings: [`你的名字叫${this.userinfo.name} ^1000`,
                `你最好的朋友的是${this.userinfo.friend} ^1000`,
                    "谢谢你抽空参加测试 \n ^1000",
                    "对于友情，我只相信一句话，日久见人心，留到最后的才是好的。",
                    "哪有人喜欢孤独，不过是不喜欢失望罢了",
                    "活着，就意味着必须要做点什么，请好好努力。",
                    "平庸这东西犹如白衬衣上的污痕，一旦染上便永远洗不掉，无可挽回。",
                    "不管全世界的人怎么说，我都认为自己的感受才是正确的。无论别人怎么看，我绝不打乱自己的节奏。——《当我跑步时我谈些什么》",
                    "你要做一个不动声色的大人了，不准情绪化，不准偷偷想念，不准回头看。去过自己另外的生活，你要听话，不是所有的鱼都会生活在同一片海里。——《舞舞舞》",], //输入内容, 支持html标签
                typeSpeed: 200, //打字速度

            });
        },
    }
}
</script>
<style scoped lang="scss">
.content {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: black;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tps {
    width: 50vw;
    height: 80vh;

}
</style>
  