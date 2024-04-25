import '../CssComponentes/App.css';

function Input() {
  return (
    <div class="form">
    <div class="input-group">
        <select>
            <option value=""><span>Tipo de Login</span></option>
        </select>
    </div>
    <div class="input-group">
        <input type="text" placeholder="exemple@email.com"></input>
        
    </div>
    <div class="input-group">
        <input type="password" placeholder="********"></input>
    </div>
</div>
  );
}

export default Input;