import Componente from "./base/Componente";

class Textfiled extends Componente {
  _valore: string;
  /**
   * textfield classico inserimento stringa
   * @param componente datiFondamentali componente
   * @param valore
   */
  constructor(componente: Componente, valore: string) {
    super(
      componente._id,
      componente._type,
      componente._name,
      componente._label,
      componente._placeholder,
      componente._isRequired,
      componente._isEditable,
      componente._posizione
    );
    this._valore = valore;
  }
}
