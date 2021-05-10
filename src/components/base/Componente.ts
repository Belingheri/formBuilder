import Posizione from "./Posizione";

export default class Componente {
  _id: string;
  _type: string;
  _name: string;
  _label: string;
  _placeholder: string;
  _isRequired: boolean;
  _isEditable: boolean;
  _posizione: Posizione;

  /**
   *
   * @param id valore univoco campo
   * @param type tipologia del campo ex. TEXTAREA,COMBOBOX ecc..
   * @param name nome del campo della tabella
   * @param label nome da visualizzare sullo schermo
   * @param placeholder testo di aiuto per la compilazione
   * @param isRequired obbligatorietà del campo
   * @param isEditable editabilità del campo
   * @param posizione posizione del campo nel form
   */
  constructor(
    id: string,
    type: string,
    name: string,
    label: string,
    placeholder: string,
    isRequired: boolean | string,
    isEditable: boolean | string,
    posizione: Posizione
  ) {
    if (posizione.tabella < 1)
      throw new Error(`Valore di "tabella" per ${id} deve essere > 0 `);
    if (posizione.riga < 1)
      throw new Error(`Valore di "riga" per ${id} deve essere > 0 `);
    if (posizione.colonna < 1)
      throw new Error(`Valore di "colonna" per ${id} deve essere > 0 `);
    this._id = id;
    this._type = type;
    this._name = name;
    this._label = label;
    this._placeholder = placeholder;
    this._isRequired =
      typeof isRequired === "string" ? isRequired === "S" : isRequired;
    this._isEditable =
      typeof isEditable === "string" ? isEditable === "S" : isEditable;
    this._posizione = posizione;
  }
}
