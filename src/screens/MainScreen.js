import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { QuestionList } from '../components/QuestionList';
import { AuthScreen } from './AuthScreen';

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Список вопросов', icon: 'queue-music', color: '#3F51B5' },
      { key: 'exit', title: 'Выйти', icon: 'album', color: '#009688' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: () => <QuestionList name={this.props.name} />,
    exit: AuthScreen
  });

  render() {
    return (
      <BottomNavigation
        style={{flex: 1}}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        onTabPress={(a) => {
            if(a.route.key === 'exit') {
              this.props.onChangeName('')
              this.props.onAuth(false)
            }
        }}
      />
    );
  }
}