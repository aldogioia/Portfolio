export class Project {
  image: string;
  title: string;
  link: string;
  date: string;

  constructor(image: string, title: string, link: string, date: string) {
    this.image = image;
    this.title = title;
    this.link = link;
    this.date = date;
  }
}
