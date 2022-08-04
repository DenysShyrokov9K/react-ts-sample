import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types';

const DashCard = ({ children, title, subtitle, actions } : {
  children? :any;
  title? : string;
  subtitle?: string;
  actions?: any;
}) => {
  return (
    <Card>
      <CardBody className="p-4">
        <div className="d-flex">
          <div>
            <CardTitle tag="h4">{title}</CardTitle>
            <CardSubtitle className="text-muted">{subtitle}</CardSubtitle>
          </div>
          <div className="ms-auto">{actions}</div>
        </div>
        <div className="mt-3">{children}</div>
      </CardBody>
    </Card>
  );
};

DashCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  actions: PropTypes.node,
};

export default DashCard;