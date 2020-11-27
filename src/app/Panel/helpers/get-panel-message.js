import {format} from 'timeago.js';

export const getPanelMessage = () =>
    [
        'Event: Landing on the frontend...^1000\n' +
        '`Date: 1 November 2013 (' + format('2013-11-01', 'en_US') + '`)^1000\n' +
        '`Name: Vladislav Dekhanov`^1000\n' +
        '`Contacts: vladdexx@yandex.ru`^1000\n' +
		'`Current project: [<a target="_blank" href="https://juggler.dev/">Juggler.dev</a>]`^1000\n' +
        '`[<a target="_blank" href="https://www.linkedin.com/in/vladislav-dekhanov-87516880/">linkedIn</a>]`' +
        '`[<a target="_blank" href="https://github.com/vladdekhanov">github</a>`]' +
        '`[<a target="_blank" href="https://twitter.com/vladdekhanov_en">twitter</a>]`' +
        '`[<a target="_blank" href="https://medium.com/@digitalmood">medium</a>]`'
    ];
