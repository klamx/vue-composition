import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const useTodos = () => {
  const store = useStore();
  const currentTab = ref('all');

  return {
    currentTab,
    all: computed(() => store.getters['allTodos']),
    completed: computed(() => store.getters['completedTodos']),
    getTodosByTab: computed(() =>
      store.getters['getTodosByTab'](currentTab.value)
    ),
    pending: computed(() => store.getters['pendingTodos']),

    // Methods
    toggleTodo: (id) => {
      store.commit('toggleTodo', id);
    },
  };
};

export default useTodos;
