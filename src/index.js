/**
 * Created by mugen on 6/11/16.
 */
import {Entity} from './entity/Entity/Entity';
import {Extended} from './model/extended/Extended/Extended';
import {ExtendedLevel2} from './model/extended/ExtendedLevel2/ExtendedLevel2';

class Application {
	constructor () {
		this.entity = new Entity();

		new Extended(
			{
				id: 0,
				extended: 'level1-0'
			}
		);

		new Extended(
			{
				id: 1,
				extended: 'level1-1'
			}
		);

		new ExtendedLevel2(
			{
				id: 0,
				extended: 'level2-0',
				attachment: {
					id: 1
				}
			}
		);

		new ExtendedLevel2(
			{
				id: 1,
				extended: 'level2-1',
				attachment: {
					id: 0
				}
			}
		);
		
		console.log('Up!');
	}
}

window.app = new Application();