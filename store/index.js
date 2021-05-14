// 在服务端渲染期间运行的都是同一个实例
// 为了防止数据冲突，把state定义成一个函数，返回数据对象

export const state = () => {
    return {
        user: null
    }
}

export const mutations = {
    setUser (state, data) {
        state.user = data;
    }
}

export const actions = {}