<template>
    <div class="content">
        <vue-typed-js :strings="typingTexts" :typeSpeed="150" @onComplete="doSmth()">
            <div class="typing"></div>
        </vue-typed-js>


    </div>
</template>
  
<script>
//引入在main.js
export default {
    data() {
        return {
            userinfo: {
                name: '',
                friend: '',
            },
            Type: true,
            typingTexts: [
                "切格瓦拉:",
                "开枪吧，胆小鬼！你要打死的是一个男子汉！",
                "宁肯站着死，决不跪著生。",
                "请听听人民的声音吧！",
                "我们走后，他们会给你们修学校和医院，会提高你们的工资，这不是因为他们良心发现，也不是因为他们变成了好人，而是因为我们来过。",
                "请相信这个因穷人的情谊而感动不已的人，请相信这个靠穷人的祝福而跋涉不停的人，请相信这个为穷人的将来而告别过去的人。",
                "列宁:",
                "浪费别人的时间等于是谋财害命，浪费自己的时间等于是慢性自杀。",
                "只要在多走一小步，仿佛是向同一方向迈的一小步，真理变会变成错误。",
                "历史早已证明，伟大的革命斗争会造就伟大人物，使过去不可能发挥的天才发挥出来。",
                "劳动者的组织性、纪律性、坚毅精神以及同全世界劳动者的团结一致，是取得最后胜利的保证。",
                "马克思:",
                "如果我们选择了最能为人类福利而劳动的职业，那么，重担就不能把我们压倒，因为这是为大家而献身；那时我们所感到的就不是可怜的、有限的、自私的乐趣，我们的幸福将属于千百万人，我们的事业将默默地、但是永恒发挥作用地存在下去，面对我们的骨灰，高尚的人们将洒下热泪。",
                "物质生活的生产方式制约着社会生活，政治生活和精神生活的过程。",
                "审查制度，就像奴隶制一样，永不可能合法，即便它作为法律存在过一千多遍。",
                "在政治上为了一定的目的，甚至可以同魔鬼结成联盟，只是必须肯定，是你领着魔鬼走而不是魔鬼领着你走。",
                "一个时代的精神，是青年代表的精神；一个时代的性格，是青春代表的性格。",
                "......"
            ]
        }
    },
    created() {
    },
    methods: {
        showType() {
            this.Type = true
        },
        //返回首页
        doSmth() {
            // setTimeout(() => {
            //     this.$router.back()
            // }, 3000)

        }
    }
}
</script>
<style lang="scss" scoped>
.content {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: black;
    overflow: hidden;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

}
</style>
  