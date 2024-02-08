export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('typescript', 'darkred');
    static readonly PYTHON = new Tag('python', 'pink');
    static readonly NODE = new Tag('node', 'red');
    static readonly JAVASCRIPT = new Tag('javascript', 'green');
    static readonly REACT = new Tag('react', 'blue');
  
    private constructor(
      private readonly key: string,
      public readonly color: string
    ) {}
    toString() {
      return this.key;
    }
  }
  