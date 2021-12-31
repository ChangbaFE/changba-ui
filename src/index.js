import pkg from '../package.json';

import 'bootstrap/js/transition.js';
// import 'bootstrap/js/collapse.js';
import 'bootstrap/js/dropdown.js';
import 'bootstrap/js/tooltip.js';
import 'bootstrap/js/tab.js';

import Badge from '../packages/badge';
import Box from '../packages/box';
import Button from '../packages/button';
import Callout from '../packages/callout';
import Checkbox from '../packages/checkbox';
import CheckboxGroup from '../packages/checkbox-group';
import Col from '../packages/col';
import ColorPicker from '../packages/color-picker';
import DatetimePicker from '../packages/datetime-picker';
import Dialog from '../packages/dialog';
import Focus from '../packages/focus';
import Form from '../packages/form';
import FormGroup from '../packages/form-group';
import Icon from '../packages/icon';
import InfoBox from '../packages/info-box';
import Input from '../packages/input';
import InputGroup from '../packages/input-group';
import InputGroupAddon from '../packages/input-group-addon';
import Label from '../packages/label';
import Loading from '../packages/loading';
import MenuItem from '../packages/menu-item';
import MessageBox from '../packages/message-box';
import Notify from '../packages/notify';
import Pagination from '../packages/pagination';
import Progress from '../packages/progress';
import Radio from '../packages/radio';
import RadioGroup from '../packages/radio-group';
import Row from '../packages/row';
import Select from '../packages/select';
import SelectPlus from '../packages/select-plus';
import SmallBox from '../packages/small-box';
import Step from '../packages/step';
import Steps from '../packages/steps';
import TabPane from '../packages/tab-pane';
import Table from '../packages/table';
import TableColumn from '../packages/table-column';
import Tabs from '../packages/tabs';
import Tooltip from '../packages/tooltip';
import Upload from '../packages/upload';
import Validation from '../packages/validation';

const components = [
  Badge,
  Box,
  Button,
  Callout,
  Checkbox,
  CheckboxGroup,
  Col,
  ColorPicker,
  DatetimePicker,
  Form,
  FormGroup,
  Icon,
  InfoBox,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  MenuItem,
  Pagination,
  Progress,
  Radio,
  RadioGroup,
  Row,
  Select,
  SelectPlus,
  SmallBox,
  Step,
  Steps,
  TabPane,
  Table,
  TableColumn,
  Tabs,
  Upload
];

const directives = [
  Focus,
  Loading,
  Tooltip,
  Validation
];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.component(Dialog.component.name, Dialog.component);

  directives.forEach(directive => {
    Vue.directive(directive.name, directive);
  });

  Vue.directive(MessageBox.name, MessageBox.directive);

  Vue.prototype.$cbDialog = Dialog.dialog;
  Vue.prototype.$cbAlert = MessageBox.alert;
  Vue.prototype.$cbConfirm = MessageBox.confirm;
  Vue.prototype.$cbPrompt = MessageBox.prompt;
  Vue.prototype.$cbNotify = Notify;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: pkg.version,
  install,
  Badge,
  Box,
  Button,
  Callout,
  Checkbox,
  CheckboxGroup,
  Col,
  ColorPicker,
  DatetimePicker,
  Focus,
  Form,
  FormGroup,
  Icon,
  InfoBox,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  Loading,
  MenuItem,
  MessageBox,
  Notify,
  Pagination,
  Progress,
  Radio,
  RadioGroup,
  Row,
  Select,
  SelectPlus,
  SmallBox,
  Step,
  Steps,
  TabPane,
  Table,
  TableColumn,
  Tabs,
  Tooltip,
  Upload,
  Validation
};
