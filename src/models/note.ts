class Note {
  public id: string;
  public timestamp: number;

  constructor(public title: string,
              public text: string,
              public tags: string[]) {
    this.timestamp = Date.now();
    this.id = this.timestamp.toString();
  }
}

export default Note;
