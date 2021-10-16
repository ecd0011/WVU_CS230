export class Tile {
    image: string;
    largeTxt: string;
    smallTxt: string;
    disclaimer: string;
    break: string;

    constructor({image, lrgTxt, smlTxt, disclaimer, brk} :
        {image: string, lrgTxt: string, smlTxt: string, disclaimer: string, brk: string}) {
            this.image = image;
            this.largeTxt = lrgTxt;
            this.smallTxt = smlTxt;
            this.disclaimer = disclaimer;
            this.break = brk;
    }
}