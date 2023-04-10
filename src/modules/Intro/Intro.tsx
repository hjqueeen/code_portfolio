import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
// Assets
import bakgroundImg from '../../assets/bakgroundImg.png';

// Components
import ScrollContainer from '../../shared/components/ScrollContainer/ScrollContainer';
import ContentContainer from '../../shared/components/ContentContainer/ContentContainer';
import TextButton from '../../shared/components/TextButton/TextButton';

// Styles
import styles from './Intro.module.scss';

type IntroProps = {
  scrollTo: string;
};
const Intro = (props: IntroProps) => {
  const { t } = useTranslation();
  return (
    <Box className="relative">
      <ScrollContainer name={props.scrollTo} bgImage={bakgroundImg}>
        <ContentContainer
          title={t('app.intro.title')}
          subtitle={t('app.intro.subtitle')}
          disableIcon
          disableTitleUnderline
        >
          <Box className={styles['intro-text-button']}>
            <TextButton size="medium" preset="pink">
              Learn more
            </TextButton>
          </Box>
        </ContentContainer>
      </ScrollContainer>
    </Box>
  );
};

export default Intro;