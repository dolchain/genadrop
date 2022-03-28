import { useState, useEffect, useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { getSingleNfts } from '../../../utils';
import { readAllSingleNft } from '../../../utils/firebase';
import NftCard from '../NftCard/NftCard';
import classes from './SingleNft.module.css';
import { GenContext } from '../../../gen-state/gen.context';

const SingleNft = () => {

  const [state, setState] = useState({
    allSingleNfts: []
  });
  const { allSingleNfts } = state
  const handleSetState = payload => {
    setState(state => ({ ...state, ...payload }))
  }
  const { singleNfts, mainnet } = useContext(GenContext);
  const { url } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    (async function getResult() {
      // let singleNfts = await readAllSingleNft();
      console.log('siuuu', allSingleNfts, singleNfts);
      if (singleNfts?.length) {
        let allSingleNfts = await getSingleNfts(mainnet, singleNfts);
        handleSetState({ allSingleNfts })
      } else {
        handleSetState({ allSingleNfts: null })
      }

    }())
  }, [singleNfts])
  console.log(allSingleNfts)

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h3>1 of 1s</h3>
        <button onClick={() => history.push(`${url}/single-mint`)}>view all</button>
      </div>
      {
        allSingleNfts?.length ?
          <div className={classes.wrapper}>
            {
              allSingleNfts
                .map((nft, idx) => (
                  <NftCard key={idx} nft={nft} extend='/single-mint' />
                ))
            }
          </div>
          :
          !allSingleNfts
            ?
            <h1 className={classes.noResult}> No Result Found.</h1>
            :
            <div className={classes.wrapper}>
              {
                (Array(5).fill(null)).map((_, idx) => (
                  <div key={idx}>
                    <Skeleton count={1} height={200} />
                    <Skeleton count={3} height={40} />
                  </div>
                ))
              }
            </div>

      }
    </div>
  )
}

export default SingleNft;