import { InputWineInfo } from '../common/types/WineTypes';
import CountriesEnum from '../common/enums/CountriesEnum';
import { mapToPresentableWine, getCountriesQuery } from '../common/utils';

export default (countries: CountriesEnum[]) => fetch(`/api/explore/explore?grape_ids[]=2&grape_filter=varietal${getCountriesQuery(countries)}`)
    .then((response) => response.json())
    .then((response) => response?.explore_vintage?.matches?.map((match: InputWineInfo) => mapToPresentableWine(match)));
