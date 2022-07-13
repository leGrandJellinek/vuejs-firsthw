let id = 1;
const app = {
    data() {
        return {
          title: 'Циклы',
          newText: '',

          list: [
            {
               id: id++,
               name: 'Ismailkek',
               nameEdit: false,
            },
            {
                id: id++,
                name: 'Nilkek',
                nameEdit: false,
            },
            {
                id: id++,
                name: 'Arslankek',
                nameEdit: false,
            }
          ]
        }
    },
    created() {
        this.getItems()
    },
    computed: {
      getListLength() {
        return this.list.length
      },
      addNewName(bool){
       return bool
    }
    },
    watch: {
        // watch - свойства - следят за нашим состоянием и отрабатывают тогда когда происходит изменение
        newText(newVal) {
            console.log(newVal);
        },
        list: {
            handler(newList) {
                localStorage.list = JSON.stringify(this.list)
            },
            deep: true
        }
    },
    methods: {
        addItem() {
            this.list.push({
                id: id++,
                name: this.newText,
                nameEdit: false
            })
            this.newText = ''
        },
        delItem(id) {
            const index = this.list.findIndex(item => item.id == id)
            this.list.splice(index,1)
        },
        getItems() {
            const localList = localStorage.list
            if(localList) {
                this.list = JSON.parse(localList)
            } 
        }
    }
}

Vue.createApp(app).mount('#app')
