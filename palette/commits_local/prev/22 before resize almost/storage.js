class DataStorage {
  constructor() {
    this['4x4'] = [
      ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
      ["FFEB3B", "FFC107","FFC107","FFEB3B"],
      ["FFEB3B", "FFC107","FFC107","FFEB3B"],
      ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
    ];
  }
  get(p_resourceName) {
    return this[p_resourceName];
  }
}