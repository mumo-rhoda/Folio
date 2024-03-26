export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly JAVA = new Tag('java', 'darkred');
    static readonly MULESOFT = new Tag('mulesoft', 'blue');
    static readonly SELENIUM = new Tag('selenium', 'green');
    static readonly SPRINGBOOT = new Tag('springboot', 'orange');
    static readonly JAVASCRIPT = new Tag('javascript', 'purple');
    static readonly TYPESCRIPT = new Tag('typescript', 'pink');


    private constructor(private readonly key : string, public readonly color: string){

    }
    toString(){
        return this.key;
    }
}