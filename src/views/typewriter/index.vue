<template>
    <div class="content">
        <div class="nes-container is-dark with-title tps" v-show="Type">
            <vue-typed-js :strings="typingTexts" :typeSpeed="150" @onComplete="doSmth()">
                <div class="typing"></div>
            </vue-typed-js>

        </div>
        <div class="nes-container is-rounded is-dark" v-show="!Type">
            <p>这里有个问卷测试,点击下方按钮即可填写</p>
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
        <!-- <audio src="@/assets/audio/七里香-周杰伦.flac" loop='true' autoplay="autoplay" ref="MusicPlay" hidden></audio> -->
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            userinfo: {
                name: '',
                friend: '',
            },
            Type: true,
            typingTexts: ['希望你能记住我，记住我曾这样存在过。^300  ――村上春树 《挪威的森林》']
        }
    },
    created() {
    },
    methods: {
        showType() {
            this.Type = true
        },
        doSmth() {
            setTimeout(() => {
                this.$router.back()
            }, 3000)

        }
    }
}
</script>
<style lang="scss" scoped>
//局部引入css文件
@import 'nes.css/css/nes.min.css';

.content {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: black;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.tps {
    width: 50vw;
    height: 80vh;

}
</style>
  