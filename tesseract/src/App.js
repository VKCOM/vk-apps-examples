import React from 'react';
import {Div, File, FormLayout, Group, Panel, PanelHeader, ScreenSpinner, Select, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
      text: '',
      imageViewer: '',
      lang: 'rus',
      status: 'ready',
      popout: null
    };

    this.recognize = this.recognize.bind(this);
    this.imageChange = this.imageChange.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(e) {
    this.setState({lang: e.currentTarget.value}, () => this.recognize());
  }

  imageChange(e) {
    e.preventDefault();

    if (!e.target.files || !e.target.files[0]) {
      return;
    }

    let image = e.target.files[0];
    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        image,
        imageViewer: reader.result,
      }, () => this.recognize());
    };

    reader.readAsDataURL(image);
  }

  recognize() {
    if (!this.state.image || !this.state.lang) {
      return;
    }

    window.Tesseract.recognize(this.state.image, {
        lang: this.state.lang
      })
      .progress(() =>
        this.setState({
          popout: <ScreenSpinner/>,
          status: 'progress',
          text: ''
        })
      )
      .catch(err => console.error(err))
      .then(data => {
        this.setState({
          text: data.text
        });
      })
      .finally(() => {
        this.setState({
          popout: null,
          status: 'finished'
        })
      })
  }

  renderResultBlock() {
    let result = this.state.text;
    if (!this.state.text && this.state.status === 'finished') {
      result = 'Не удалось распознать текст. Попробуйте другое изображение.';
    }

    if (!result) {
      return '';
    }

    return (
      <Group title="Текст">
        <Div>{result}</Div>
      </Group>
    );
  }

  renderImageBlock() {
    let content = this.state.imageViewer ? (
      <img style={{
        maxWidth: '100%',
        maxHeight: '100%'
      }} alt="Изображение" src={this.state.imageViewer}/>
    ) : 'Загрузите изображение для распознования текста 📷';

    return (<Group title="Изображение"> <Div style={{
      textAlign: 'center',
    }}>{content}</Div></Group>);
  }

  render() {
    let textBlock = this.renderResultBlock();
    let imageBlock = this.renderImageBlock();


    return (
      <View popout={this.state.popout} activePanel='main_panel'>
        <Panel id='main_panel'>
          <PanelHeader>Распознавание текста</PanelHeader>
          {imageBlock}
          {textBlock}
          <Group title="Настройки">
            <FormLayout>
              <Select top="Язык" status={this.state.lang ? 'valid' : 'error'} placeholder="Выберите язык"
                      value={this.state.lang} onChange={this.changeLanguage}>
                <option value="eng">Английский</option>
                <option value="rus">Русский</option>
              </Select>
              <File top="Загрузите ваше изображение" accept="image/*" size="xl" before={<Icon24Camera/>}
                    onChange={this.imageChange}>
                Открыть галерею
              </File>
            </FormLayout>
          </Group>

        </Panel>
      </View>
    );
  }
}

export default App;
