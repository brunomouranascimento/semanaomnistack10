import React from 'react';
import './sidebar.scss';

export function Sidebar(props) {
  return (
    <aside>
      <strong>Cadastrar</strong>
      <form onSubmit={props.onSubmit}>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input name="github_username" id="github_username" required value={props.github_username} onChange={e => props.onChange(e)}/>
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required value={props.techs} onChange={e => props.onChange(e)} />
        </div>

        <div className="input-group">

          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input type="number" name="latitude" id="latitude" required value={props.latitude} onChange={e => props.onChange(e)} />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input type="number" name="longitude" id="longitude" required value={props.longitude} onChange={props.onChange} />
          </div>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </aside>
  );
}

export default Sidebar;
