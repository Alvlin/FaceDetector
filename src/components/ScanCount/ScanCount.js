import React from 'react';

const ScanCount = ({name, entries}) => {
  name = name.split(' ')[0];
  return(
    <div>
      <div>
        {`${name}, You have Scanned a Total of : `}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  )
}
export default ScanCount;
