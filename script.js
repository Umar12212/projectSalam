let id = 1;
const app = {
  data() {
    return {
      title: 'Циклы',
      text: '',
      notes: [
        {id: id++, name: 'HTML', editing: false},
        {id: id++, name: 'Css', editing: false},
        {id: id++, name: 'Js', editing: false},
      ]
    }
  },
  methods: {
    addNote() {
      if (this.text.trim() !== '') {
        this.notes.push({
          id: id++,
          name: this.text,
          editing: false
        });
        this.text = '';
      }
    },
    delNote(note) {
      this.notes = this.notes.filter((item) => item.id !== note.id);
    },
    editNote(note) {
      note.editing = true;
    },
    saveNote(note) {
      note.editing = false;
    },
  }
};

Vue.createApp(app).mount('#app');
