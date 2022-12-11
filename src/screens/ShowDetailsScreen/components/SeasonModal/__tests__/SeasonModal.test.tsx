import React, { createRef } from 'react';
import { act, fireEvent, render } from '@testing-library/react-native';
import { SeasonModal } from '../SeasonModal';
import { Modalize } from 'react-native-modalize';

describe('SeasonModal', () => {
  test('show all seasons options', () => {
    const modalRef = createRef<Modalize>();

    const { getAllByText } = render(
      <SeasonModal
        ref={modalRef}
        onSelectSeason={() => {}}
        seasons={['1', '2', '3']}
        selectedSeason="1"
      />,
    );

    act(() => {
      modalRef.current?.open();
    });

    expect(getAllByText(/\Season\s(\w+|\d+)+/g).length).toBe(3);
    expect(getAllByText('Season', { exact: false }).length).toBe(3);
    expect(getAllByText(/season/i).length).toBe(3);
  });

  test('call onSelectSeason with correct season when season option is pressed', () => {
    const modalRef = createRef<Modalize>();

    const onSelectSeasonMock = jest.fn();

    const { getByText } = render(
      <SeasonModal
        ref={modalRef}
        onSelectSeason={onSelectSeasonMock}
        seasons={['1', '2', '3']}
        selectedSeason="1"
      />,
    );

    act(() => {
      modalRef.current?.open();
    });

    const season2Element = getByText(/season 2/i);

    fireEvent.press(season2Element);

    expect(onSelectSeasonMock).toHaveBeenCalledWith('2');
  });
});
