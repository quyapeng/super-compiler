export enum TokenTypes {
    Paren,
    Name,
    Number,
    String
}
export interface Token {
    type: TokenTypes;
    value: string;
  }

export function tokenizer(code: string){
    const tokens: Token[] = [];
    console.log(code);




    return tokens;
}

