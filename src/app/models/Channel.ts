import {DetailLink} from './DetailLink';
import {ImageUrlsLink} from './ImageUrlsLinks';
import {Thirdpartylinks} from './Thirdpartylinks';
import {ChannelStreamingUrlsLink} from './ChannelStreamingUrlsLink';

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
}
