import { StyleSheet, Text, View } from 'react-native';

const Help = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Precisa de Ajuda?</Text>
      <Text style={styles.text}>
        Se você ainda não possui um código, será necessário entrar em contato com a equipe responsável pelo seu cadastro. Normalmente, o código é fornecido diretamente pelos desenvolvedores ou administradores do sistema.
      </Text>
      <Text style={styles.text}>
        Entre em contato com seu supervisor, gerente ou com o time de desenvolvimento para solicitar seu código de acesso. Eles irão validar suas informações e fornecer os dados necessários para ativação.
      </Text>
      <Text style={styles.text}>
        Este processo ajuda a garantir que apenas profissionais autorizados tenham acesso ao sistema.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(249, 249, 250)',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 10,
    lineHeight: 24,
  },
});

export default Help;

