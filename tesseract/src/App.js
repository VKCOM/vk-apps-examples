import React from 'react';
import {
  Div,
  File,
  FormLayout,
  Group,
  Panel,
  PanelHeader,
  ScreenSpinner,
  Select,
  View
} from '@vkontakte/vkui';
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
    let reader = new FileReader();
    let image = e.target.files[0];

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
          popout: <ScreenSpinner/>
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
          popout: null
        })
      })
  }

  renderResultBlock() {
    if (!this.state.text) {
      return '';
    }

    return (
      <Group title="Текст">
        <Div>{this.state.text}</Div>
      </Group>
    );
  }

  render() {
    let textBlock = this.renderResultBlock();

    let imageBlock = this.state.imageViewer ? (<Group title="Изображение">
      <Div style={{
        textAlign: 'center',
      }}>
        <img style="width:100%;" alt="Source" src={this.state.imageViewer}/>
      </Div>
    </Group>) : '';

    return (
      <View popout={this.state.popout} activePanel='main_panel'>
        <Panel id='main_panel'>
          <PanelHeader>Распознавание текста</PanelHeader>

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
          {imageBlock}
          {textBlock}
        </Panel>
      </View>
    );
  }
}

export default App;
