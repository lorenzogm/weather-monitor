Horizons = SEnum([
  'hour',
  'day',
  'week',
  'month',
]);

Horizons['hour'].label = 'Última hora';
Horizons['day'].label = 'Último día';
Horizons['week'].label = 'Última semana';
Horizons['month'].label = 'Último mes';

Horizons['hour'].horizon = 60;
Horizons['day'].horizon = 60 * 24;
Horizons['week'].horizon = 60 * 24 * 7;
Horizons['month'].horizon = 60 * 24 * 7 * 30;
