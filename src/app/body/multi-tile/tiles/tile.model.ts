export class Tile {
    image: string;
    lrgTxt: string;
    smlTxt: string;
    disclaimer: string;
    brk: string;

    constructor({image, lrgTxt, smlTxt, disclaimer, brk} :
        {image: string, lrgTxt: string, smlTxt: string, disclaimer: string, brk: string}) {
            this.image = image;
            this.lrgTxt = lrgTxt;
            this.smlTxt = smlTxt;
            this.disclaimer = disclaimer;
            this.brk = brk;
    }
}