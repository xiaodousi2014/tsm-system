<template>
    <div class="content_box">
        <AttributeCom tableName="t_maps" />
    </div>
</template>

<script>
import Common from '@/api/common'
import AttributeCom from '@/components/attributeCom'

export default {
    components: { AttributeCom },
    data() {
        return {
            field_data: [],
            value: '',
            fieldInfo: {},
        }
    },
    computed: {},
    watch: {},
    created() {
        this.init()
    },
    mounted() {},
    methods: {
        init() {
            Common.attrdata('t_maps').then((res) => {
                if (res.code === '0000' && res.data && res.data.field_data) {
                    this.field_data = res.data.field_data
                }
            })
        },
        edit(field) {
            console.log(field, typeof field.itemdata)
            this.fieldInfo = {}
            let itemdata = []
            if (!Array.isArray(field.itemdata)) {
                itemdata = field.itemdata && field.itemdata.length > 0 ? field.itemdata.split(',') : []
            } else {
                itemdata = field.itemdata
            }
            console.log(field, itemdata)
            this.fieldInfo = field
            this.$set(this.fieldInfo, 'itemdata', itemdata)
        },
        add() {
            if (!this.fieldInfo.itemdata) {
                return
            }
            if (this.fieldInfo.itemdata) {
                if (this.fieldInfo.itemdata.indexOf(this.value) > -1) {
                    this.$message.error('已经存在')
                    return
                }
            }
            this.fieldInfo.itemdata.push(this.value)
            this.value = ''
            // this.submit()
        },
        deletefie(key) {
            console.log(key)
            this.fieldInfo.itemdata.splice(key, 1)
            // this.submit()
        },
        submit() {
            let params = {
                infoType: 't_maps',
                field: this.fieldInfo.name,
                data: this.fieldInfo.itemdata.join(','),
            }
            console.log(params)
            Common.puAattrdata(params).then((res) => {
                if (res.code === '0000') {
                    this.init()
                }
            })
        },
    },
}
</script>

<style lang="less" scoped>
.field_box {
    width: 100%;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    padding: 0 10px;
    position: relative;
    border: 1px solid #eeeeee;

    &_active {
        background: #3d85cc;
        color: #ffffff;
    }

    .delete_icon {
        position: absolute;
        top: 12px;
        right: 10px;
        font-size: 15px;
        cursor: pointer;
    }
}
</style>
