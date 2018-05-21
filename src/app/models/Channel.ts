import {DetailLink} from './DetailLink';
import {ImageUrlsLink} from './ImageUrlsLinks';
import {ChannelStreamingUrlsLink} from './ChannelStreamingUrlsLink';
import {Thirdpartylinks} from './Thirdpartylinks';
import {Stream} from './Stream';

export class Channel {
  code: string;
  name: string;
  displayName: string;
  eid: string;
  type: string;
  state: string;
  description: string;
  radioPlayerURL: string;
  websiteURL: string;
  logoUrl: string;
  channelStreamingUrlsLink: ChannelStreamingUrlsLink;
  imageUrlsLink: ImageUrlsLink;
  thirdpartylinks: Thirdpartylinks;
  detailLink: DetailLink;
  channels: Channel[];
  selected: boolean;
  streams: Stream[];
}
