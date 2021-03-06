import React, { Component } from 'react';
import './App.css';
import ColorSection from './ColorSection';

class App extends Component {
  render() {
    return (
      <div>
        <ColorSection id="section-1" color="green" goto="section-2" title="Позитивность"
          text="То, что вы думаете, на чём сосредотачиваетесь, и чем окружаете себя, конечном счёте формирует вас."
        />
        <ColorSection id="section-2" color="blue" goto="section-3" title="Терпение"
          text="При помощи времени, воздействия и терпения Вселенная постепенно превращает гусениц в бабочек, песок в жемчуг, а уголь в алмазы. Ты над своей жизнью тоже должен работать, так что держись."
        />
        <ColorSection id="section-3" color="yellow" goto="section-4" title="Храбрость"
          text="Невозможно жить, не ошибаясь, только если вы живёте и чрезмерно осторожничайте во всём (но в этом случае вы не живёте, а существуете). Нельзя всегда ждать идеального времени, иногда нужно осмелиться и прыгнуть."
        />
        <ColorSection id="section-4" color="magenta" goto="section-5" title="Правда"
          text="Говори только правду, или, в конечном итоге, её кто-то скажет за тебя. Честная жизнь создаёт душевное спокойствие, которое является бесценным. Не становись бесчестным и не мирись, если такие люди встречаются на твоём пути."
        />
        <ColorSection id="section-5" color="1" goto="section-1" title="Ответственность"
          text="В любых ситуациях, в которых вы когда-либо были, положительных или отрицательных, общее – это вы. Ответственность – это признание, что независимо от того, что произошло до этого момента в вашей жизни, вы способны сделать выбор, чтобы либо изменить ситуацию, либо изменить своё отношение к ней."
        />
      </div>
    );
  }
}

export default App;
