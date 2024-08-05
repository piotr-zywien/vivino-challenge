import { InputWineInfo } from '../common/types/WineTypes';
import { mapToPresentableWine } from '../common/utils';

export default () => fetch('/api/explore/explore?grape_ids[]=2&grape_filter=varietal')
    .then((response) => response.json())
    .then((response) => response?.explore_vintage?.matches?.map((match: InputWineInfo) => mapToPresentableWine(match)));