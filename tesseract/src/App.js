import React from 'react';
import {Div, File, FormLayout, Group, Panel, PanelHeader, ScreenSpinner, Select, Textarea, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import loadImage from 'blueimp-load-image';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
      text: '',
      lang: 'rus',
      status: 'ready',
      popout: null,
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

    let options = {
      canvas: true
    };
    let file = e.target.files[0];
    loadImage.parseMetaData(file, (data) => {
      if (data.exif) {
        options.orientation = data.exif.get('Orientation');
      }
      loadImage(file, (img) => {

        if (img.type === 'error') {
          // clearUpload();
          // ErrorFactory.setErrorMessage('', 'Please try another image.');
        } else {
          this.setState({
            image: img.toDataURL(),
          }, () => this.recognize());
        }

      }, options);
    });
  }

  recognize() {
    if (!this.state.image || !this.state.lang) {
      return;
    }

    this.setState({
      popout: <ScreenSpinner/>,
      status: 'progress',
      text: ''
    });

    window.Tesseract.recognize(this.state.image, {
        lang: this.state.lang
      })
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
      <Group title="Результат">
        <FormLayout>
          <Textarea top="Текст" value={result}/>
        </FormLayout>
      </Group>
    );
  }

  renderImageBlock() {
    return (<Group title="Изображение"> <Div style={{
      textAlign: 'center',
    }}>
      <div style={{display: (!this.state.image ? 'none' : '')}}>
        <img alt="Изображение" style={{
          maxWidth: '100%',
          maxHeight: '100%',
        }} src={this.state.image}/>
      </div>
      <div style={{display: (this.state.image ? 'none' : '')}}>
        Загрузите изображение для распознования текста
      </div>
    </Div></Group>);
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
