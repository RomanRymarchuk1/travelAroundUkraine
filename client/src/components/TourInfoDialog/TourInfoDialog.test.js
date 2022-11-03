import { render } from '@testing-library/react';
import TourInfoDialog from './TourInfoDialog';

const included = [
  { icon: '', service: 'Professional guide' },
  { icon: '', service: 'Accomodation' },
];

const cost = {
  eur: 70,
  usd: 70,
  uah: 2584,
};

const dates = { beginDate: new Date('2022-02-01'), endDate: new Date('2022-02-25') };

const details = {
  duration: '3 days',
  departs: 'First city',
  returns: 'Second city',
};

describe('TourInfoDialog snapshot testing', () => {
  test('should TourInfoDialog without close button match snapshot', () => {
    const { asFragment } = render(<TourInfoDialog included={included} cost={cost} dates={dates} details={details} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
