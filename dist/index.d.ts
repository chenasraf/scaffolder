declare namespace IScaffold {
  class SimpleScaffold {
    constructor(config: Config)
    run(): void
  }

  export interface Config {
    name?: string
    templates: string[]
    output: string | ((path: string, base: string) => string)
    locals?: Locals
    createSubfolder?: boolean
  }

  export interface Locals {
    [k: string]: string
  }

  export interface FileRepr {
    base: string
    file: string
  }
}

export default IScaffold.SimpleScaffold
export { IScaffold }
