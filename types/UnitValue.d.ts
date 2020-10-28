type Unit = 'px' | 'pt' | 'in' | 'pc' | 'cm' | '%' | 'mm'

declare interface UnitValue {}
declare var UnitValue: {
    new(): UnitValue 
    new(x: number, y: number): UnitValue
    new(unitValue: string): UnitValue

    /**
     * Converts to the value represented in indicated unit without change the original one.
     * @example
     * var a = UnitValue("22 px")
     * a.as("cm") // 0.7761111
     * b // 22 px
     */
    as(unit: Unit): number
    /**
     * Converts the variable to the value represented in indicated unit. 
     * @example
     * var a = UnitValue("22 px")
     * a.convert("cm") // true
     * a // 0.7761111
     */
    convert(unit: Unit): boolean
}