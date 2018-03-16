/**
 * Created by nadiia on 3/16/18.
 */

import React, {
    Component
} from 'react';
import {
    StatusBar,
    FlatList,
    View
} from 'react-native';
import {
    connect
} from 'react-redux';
import {
    Container,
    Thumbnail,
    ListItem,
    Subtitle,
    Header,
    Button,
    Right,
    Title,
    Body,
    Left,
    Icon,
    Text,
} from 'native-base';
import {
    actionResetFollowers,
    actionGetFollowers
} from './actions';
import {
    actionNavBack,
} from '../navigator/actions';

class Followers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: true
        }
    }

    componentDidMount() {
        this._getFollowers();
    }

    componentWillUnmount() {
        this.props.resetFollowers();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({refreshing: false});
    }

    render() {
        const {followers, navBack, nav} = this.props;
        const {user} = this.props.navigation.state.params;

        return (
            <Container>
                <Header>
                    <StatusBar barStyle='light-content'/>
                    <Left>
                        <Button transparent onPress={navBack}>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Followers</Title>
                    <Subtitle>{`${user.login}'s`}</Subtitle>
                    </Body>
                    <Right />
                </Header>
                <View style={{flex: 1}}>
                    <FlatList
                        pagingEnabled={true}
                        data={followers}
                        onRefresh={this._onRefresh}
                        refreshing={this.state.refreshing}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) =>
                            <ListItem disabled={true}>
                                <Thumbnail square size={100} source={{uri: item.avatar_url}}/>
                                <Body><Text>{item.login}</Text></Body>
                            </ListItem>
                        }
                    />
                </View>
            </Container>
        );
    }

    _onRefresh = () => {
        this.setState({refreshing: false});
        this._getFollowers();
    }

    _getFollowers = () => {
        const {user} = this.props.navigation.state.params;
        this.props.getFollowers(user.login);
    }
}

const mapStateToProps = (state) => {
    return {
        followers: state.followers
    }
};

const mapDispatchToProps = (dispatch) => ({
    getFollowers: (login) => {
        dispatch(actionGetFollowers(login));
    },
    resetFollowers: () => {
        dispatch(actionResetFollowers());
    },
    navBack: () => {
        dispatch(actionNavBack());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Followers);