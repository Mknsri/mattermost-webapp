// Copyright (c) 2017-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import AddIncomingWebhook from 'components/integrations/components/add_incoming_webhook/add_incoming_webhook.jsx';

configure({adapter: new Adapter()});

describe('components/integrations/AddIncomingWebhook', () => {
    const createIncomingHook = jest.fn();
    const props = {
        team: {
            id: 'testteamid',
            name: 'test'
        },
        createIncomingHookRequest: {
            status: 'not_started',
            error: null
        },
        actions: {createIncomingHook}
    };

    test('should match snapshot', () => {
        const wrapper = shallow(<AddIncomingWebhook {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should have called createIncomingHook', () => {
        const hook = {
            channel_id: 'channel_id',
            display_name: 'display_name',
            description: 'description'
        };
        const wrapper = shallow(<AddIncomingWebhook {...props}/>);
        wrapper.instance().addIncomingHook(hook);
        expect(createIncomingHook).toHaveBeenCalledTimes(1);
        expect(createIncomingHook).toBeCalledWith(hook);
    });
});
