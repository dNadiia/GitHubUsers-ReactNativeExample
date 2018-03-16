/**
 * Created by nadiia on 3/16/18.
 */

import React, {
    Component
} from 'react';
import {
    StatusBar,
    FlatList
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
    Title,
    Right,
    Body,
    Left,
    Text,
    View,
} from 'native-base';
import {
    actionGetUsers
} from './actions';
import {
    actionNavFollowers,
} from '../navigator/actions';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            since: 0,
            perPage: 20
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            refreshing: false,
            since: this.state.since + this.state.perPage
        });
    }

    render() {
        const {users, navFollowers} = this.props;
        return (
            <Container>
                <Header>
                    <StatusBar barStyle='light-content'/>
                    <Left />
                    <Body>
                    <Title>Users</Title>
                    <Subtitle>GitHub</Subtitle>
                    </Body>
                    <Right />
                </Header>
                <View style={{flex: 1}}>
                    <FlatList
                        data={users}
                        onRefresh={this._onRefresh}
                        refreshing={this.state.refreshing}
                        onMomentumScrollBegin={() => {
                            this.onEndReachedCalledDuringMomentum = false;
                        }}
                        onEndReached={this._onEndReached}
                        onEndReachedThreshold={0.5}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) =>
                            <ListItem onPress={() => {
                                navFollowers(item)
                            }}>
                                <Thumbnail square size={100} source={{uri: item.avatar_url}}/>
                                <Body>
                                <Text>{item.login}</Text>
                                <Text note>{item.html_url}</Text>
                                </Body>
                            </ListItem>
                        }
                    />
                </View>
            </Container>
        );
    }

    _onRefresh = () => {
        this.props.getUsers(0, 20);
        this.setState({refreshing: false, since: 0, perPage: 20});
    }

    _onEndReached = () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            this.props.getUsers(this.state.since, this.state.perPage);
            this.onEndReachedCalledDuringMomentum = true;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = (dispatch) => ({
    getUsers: (since, perPage) => {
        dispatch(actionGetUsers(since, perPage));
    },
    navFollowers: (user) => {
        dispatch(actionNavFollowers(user));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);