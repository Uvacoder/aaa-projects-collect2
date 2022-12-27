import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderName,
  ProfileButton,
  UserAvatar,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
  ProviderListTitle,
} from './styles';

interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = function () {
  const { user, token } = useAuth();
  const { navigate } = useNavigation();
  const [providers, setProviders] = React.useState<Provider[]>([]);

  useEffect(() => {
    api
      .get('/providers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setProviders(response.data);
      });
  }, [token]);

  const navigateToProfile = useCallback(() => {
    navigate('Profile' as never);
  }, [navigate]);

  const navigateToCreateAppointment = useCallback(
    (providerId: string) => {
      navigate('CreateAppointment' as never, { providerId } as never);
    },
    [navigate],
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo,{'\n'}
          <HeaderName>{user.name}</HeaderName>
        </HeaderTitle>

        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </Header>

      <ProvidersList
        data={providers}
        keyExtractor={provider => provider.id}
        ListHeaderComponent={
          <ProviderListTitle>Cabeleireiros</ProviderListTitle>
        }
        renderItem={({ item: provider }) => (
          <ProviderContainer
            onPress={() => navigateToCreateAppointment(provider.id)}
          >
            <ProviderAvatar source={{ uri: provider.avatar_url }} />
            <ProviderInfo>
              <ProviderName>{provider.name}</ProviderName>
              <ProviderMeta>
                <Icon name="calendar" size={14} color="#ff9000" />
                <ProviderMetaText>Segunda à sexta</ProviderMetaText>
              </ProviderMeta>
              <ProviderMeta>
                <Icon name="clock" size={14} color="#ff9000" />
                <ProviderMetaText>8h às 18h</ProviderMetaText>
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>
        )}
      />
    </Container>
  );
};

export default Dashboard;
